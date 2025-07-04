export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      brand: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      category: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      order: {
        Row: {
          alt_codes: string[] | null
          created_at: string
          customer: number | null
          delivery: boolean
          email: string | null
          fulfilled: boolean
          full_name: string | null
          id: string
          metadata: Json | null
          payment_id: string
          products: Json
          shipping_address: Json
          shipping_amount: number
          total_amount: number
        }
        Insert: {
          alt_codes?: string[] | null
          created_at?: string
          customer?: number | null
          delivery?: boolean
          email?: string | null
          fulfilled?: boolean
          full_name?: string | null
          id: string
          metadata?: Json | null
          payment_id: string
          products: Json
          shipping_address: Json
          shipping_amount: number
          total_amount: number
        }
        Update: {
          alt_codes?: string[] | null
          created_at?: string
          customer?: number | null
          delivery?: boolean
          email?: string | null
          fulfilled?: boolean
          full_name?: string | null
          id?: string
          metadata?: Json | null
          payment_id?: string
          products?: Json
          shipping_address?: Json
          shipping_amount?: number
          total_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_customer_fkey"
            columns: ["customer"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      product: {
        Row: {
          brand: number | null
          fts_name: unknown | null
          id: number
          image_urls: string[] | null
          manufacturer_code: string | null
          name: string
          on_sale: boolean
          original_price: number
          price: number
          quantity: number
          sku: string
          specifications: Json | null
          variants: Json | null
        }
        Insert: {
          brand?: number | null
          fts_name?: unknown | null
          id?: number
          image_urls?: string[] | null
          manufacturer_code?: string | null
          name: string
          on_sale?: boolean
          original_price: number
          price: number
          quantity?: number
          sku: string
          specifications?: Json | null
          variants?: Json | null
        }
        Update: {
          brand?: number | null
          fts_name?: unknown | null
          id?: number
          image_urls?: string[] | null
          manufacturer_code?: string | null
          name?: string
          on_sale?: boolean
          original_price?: number
          price?: number
          quantity?: number
          sku?: string
          specifications?: Json | null
          variants?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "product_brand_fkey"
            columns: ["brand"]
            isOneToOne: false
            referencedRelation: "brand"
            referencedColumns: ["id"]
          },
        ]
      }
      product_category: {
        Row: {
          category_id: number
          product_id: number
        }
        Insert: {
          category_id: number
          product_id: number
        }
        Update: {
          category_id?: number
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "product_category_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_category_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          company_name: string | null
          created_at: string
          email_address: string
          first_name: string | null
          id: number
          is_admin: boolean
          is_company: boolean
          last_name: string | null
          password_hash: string
          phone_number: string
        }
        Insert: {
          company_name?: string | null
          created_at?: string
          email_address: string
          first_name?: string | null
          id?: number
          is_admin?: boolean
          is_company?: boolean
          last_name?: string | null
          password_hash: string
          phone_number: string
        }
        Update: {
          company_name?: string | null
          created_at?: string
          email_address?: string
          first_name?: string | null
          id?: number
          is_admin?: boolean
          is_company?: boolean
          last_name?: string | null
          password_hash?: string
          phone_number?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
